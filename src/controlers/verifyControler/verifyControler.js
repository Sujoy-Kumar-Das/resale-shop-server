const verifyControler = async (req, res) => {
    try {
      const email = req.query.email;
      const query = { email: email };
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          verified: "requested",
        },
      };
      const user = await usersCollectons.findOne(query);
      if (!user?.verified) {
        const result = await usersCollectons.updateOne(query, updateDoc, options);
        if (result.acknowledged) {
          res.send({
            success: true,
            message: "Your verification request had been Send successfully.",
          });
        }
      } else {
        res.send({
          success: false,
          message: "Verify request already send",
        });
      }
    } catch (error) {
      res.send({
        success: false,
        message: "Verification error",
      });
    }
  }

  module.exports = verifyControler;