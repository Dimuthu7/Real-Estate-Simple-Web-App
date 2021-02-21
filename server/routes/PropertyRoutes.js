const router = require("express").Router();
const PropertyModel = require("../model/PropertyModel");

router.post("/", async (req, res) => {
  let imgFile = null;

  try {
    imgFile = req.files.strImages;
  } catch (err) {
    return res.status(404).send("Please upload the image");
  }

  const imgName = "P-" + req.body.strBuyerEmail + "-" + Date.now() + ".jpg";

  //save image to the server side
  await imgFile.mv("./img/" + imgName, (err, result) => {
    if (err)
      return res.status(400).send("Failed to upload user profile image!");
  });

  // Create new property
  const property = new PropertyModel({
    strPropertyAddress: req.body.strPropertyAddress,
    strImages: imgName,
    numBeds: req.body.numBeds,
    numBaths: req.body.numBaths,
    numLandSize: req.body.numLandSize,
    strTitle: req.body.strTitle,
    strDescription: req.body.strDescription,
    numPrice: req.body.numPrice,
    strBuyerEmail: req.body.strBuyerEmail,
  });

  try {
    const savedProperty = await property.save();
    res.send(savedProperty);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

//get ad
router.post("/getProperty", async (req, res) => {
  const property = await PropertyModel.findOne({
    strBuyerEmail: req.body.strBuyerEmail,
  });
  if (!property) return res.status(404).send("You haven't posted any ads!");

  try {
    res.send(property);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

//update ad
router.post("/update", async (req, res) => {
  const property = await PropertyModel.findOne({
    strBuyerEmail: req.body.strBuyerEmail,
  });
  if (!property) return res.status(404).send("You haven't posted any ads!");

  let imgFile = null;
  try {
    imgFile = req.files.strImages;
  } catch (err) {
    return res.status(404).send("Please upload the image");
  }

  const imgName = "P-" + req.body.strBuyerEmail + "-" + Date.now() + ".jpg";

  await imgFile.mv("./img/" + imgName, (err, result) => {
    if (err)
      return res.status(400).send("Failed to upload user profile image!");
  });

  try {
    property.strPropertyAddress = req.body.strPropertyAddress;
    property.strImages = imgName;
    property.numBeds = req.body.numBeds;
    property.numBaths = req.body.numBaths;
    property.numLandSize = req.body.numLandSize;
    property.strTitle = req.body.strTitle;
    property.strDescription = req.body.strDescription;
    property.numPrice = req.body.numPrice;
    property.strBuyerEmail = req.body.strBuyerEmail;

    await property.save();

    res.send(property);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

//delete ad
router.post("/delete", async (req, res) => {
  const property = await PropertyModel.findOne({
    strBuyerEmail: req.body.strBuyerEmail,
  });
  if (!property) return res.status(404).send("You haven't posted any ads!");

  try {
    await PropertyModel.findByIdAndDelete(property._id);
    res.send(property);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
});

module.exports = router;
