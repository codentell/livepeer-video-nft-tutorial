const express = require('express');
const multer = require('multer');
const { default: VodApi } = require("@livepeer/video-nft/lib/api");
const { getDesiredProfile } = require('@livepeer/video-nft/lib/transcode');
require('dotenv').config()

const api = new VodApi(process.env.LIVEPEER_API_KEY);
const cors = require('cors')

const app = express();
app.use(cors())
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        const { originalname } = file;
        cb(null, originalname);
    }
})
const upload = multer({ storage });


app.post('/upload', upload.array('fileName'), async (req, res) => {
    console.log("Testing");
    console.log(req.files);
    console.log('1. Requesting upload URL... ');
    const {
        url: uploadUrl,
        asset: { id: assetId },
        task: importTask
    } = await api.requestUploadUrl(req.files[0].path);

    console.log(`Pending asset with id=${assetId}`);

    console.log(uploadUrl);

    console.log('2. Uploading file...');
    await api.uploadFile(uploadUrl, String(req.files[0].path));
    await api.waitTask(importTask);


    let asset = await api.getAsset(assetId ?? '');
    const desiredProfile = await getDesiredProfile(asset);
    if (desiredProfile) {
        console.log(
            `3. Transcoding asset to ${desiredProfile.name} at ${Math.round(
                desiredProfile.bitrate / 1024
            )} kbps bitrate`
        );
        const transcode = await api.transcodeAsset(asset, desiredProfile);
        await api.waitTask(transcode.task);
        asset = transcode.asset;
    }

    console.log('3. Starting export... ');
    let { task: exportTask } = await api.exportAsset(
        asset.id ?? '',
        JSON.parse(JSON.stringify({
            name: req.files[0].filename,
            description: `Livepeer video from asset ${JSON.stringify(
                req.files[0].filename
            )}`,
            image: `ipfs://bafkreidmlgpjoxgvefhid2xjyqjnpmjjmq47yyrcm6ifvoovclty7sm4wm`,
            properties: {}
        }))
    );
    console.log(`Created export task with id=${exportTask.id}`);
    exportTask = await api.waitTask(exportTask);

    const result = exportTask.output?.export?.ipfs;
    console.log(
        `4. Export successful! Result: \n${JSON.stringify(result, null, 2)}`
    );

    console.log(
        `5. Mint your NFT at:\n` +
        `https://livepeer.com/mint-nft?tokenUri=${result?.nftMetadataUrl}`
    );

    return res.send({ status: 'OK', tokenUri: `${result?.nftMetadataUrl}` });
});

app.listen(3001);