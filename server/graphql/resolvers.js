const Properties = require("../model/PropertyModel");

module.exports = {
  Query: {
    async property(_, { ID }) {
      return await Properties.findById(ID);
    },
    async getProperties(_, { amount }) {
      return await Properties.find().sort({ createdAt: -1 }).limit(amount);
    },
    async getPropertiesByPrice(_, { price }) {
      return Properties.find({}).then((items) => {
        return items.filter((item) => parseInt(item.price) <= parseInt(price));
      });
    },
    async getAllProperties(_, { price, bhk }) {
      return Properties.find({}).then((items) => {
        return items.filter((item) => item.bedroom == bhk);
      });
    },
  },
  Mutation: {
    async addProperty(
      _,
      {
        propertyInput: {
          imageUrl,
          homeAddress,
          price,
          companyName,
          status,
          bedroom,
          bathroom,
          area,
          type,
          condition,
          floor,
          description,
          ameneties,
          phoneNumber,
          emailAddress,
          propertyTitle,
          parking,
        },
      }
    ) {
      const addProperty = new Properties({
        imageUrl: imageUrl,
        homeAddress: homeAddress,
        price: price,
        companyName: companyName,
        status: status,
        bedroom: bedroom,
        bathroom: bathroom,
        area: area,
        type: type,
        condition: condition,
        floor: floor,
        description: description,
        ameneties: ameneties,
        phoneNumber: phoneNumber,
        emailAddress: emailAddress,
        propertyTitle: propertyTitle,
        parking: parking,
        createdAt: new Date().toISOString(),
      });

      const res = await addProperty.save();
      console.log(res._doc);
      return {
        id: res.id,
        ...res._doc,
      };
    },
    async deleteProperty(_, { ID }) {
      const wasDeleted = (await Properties.deleteOne({ _id: ID })).deletedCount;
      return wasDeleted;
    },
    async editProperty(
      _,
      {
        ID,
        propertyInput: {
          imageUrl,
          homeAddress,
          price,
          companyName,
          status,
          bedroom,
          bathroom,
          area,
          type,
          condition,
          floor,
          description,
          ameneties,
          phoneNumber,
          emailAddress,
          propertyTitle,
          parking,
        },
      }
    ) {
      const wasEdited = (
        await Properties.updateOne(
          { _id: ID },
          {
            imageUrl: imageUrl,
            homeAddress: homeAddress,
            price: price,
            companyName: companyName,
            status: status,
            bedroom: bedroom,
            bathroom: bathroom,
            area: area,
            type: type,
            condition: condition,
            floor: floor,
            description: description,
            ameneties: ameneties,
            phoneNumber: phoneNumber,
            emailAddress: emailAddress,
            propertyTitle: propertyTitle,
            parking: parking,
          }
        )
      ).modifiedCount;
      return wasEdited;
    },
  },
};
