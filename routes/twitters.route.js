const { Router } = require("express")
const { twitterController } = require("../controllers/twitters.controller");
const router = Router();

router.post("/twitter", twitterController.postTwitter);
router.delete("/twitter/:id", twitterController.deleteTwitter);
router.patch("/twitter/:id", twitterController.patchTwitter);
router.get("/twitter", twitterController.getTwitter);

module.exports = router;