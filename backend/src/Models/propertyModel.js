import slugify from "slugify";
import mongoose from "mongoose";

const propertySchema = new mongoose.Schema({
  propertyName:{
    type: String,
    required: [true, "Please enter your property name"]
  },
  description:{
    type: String,
    required: [true, "Please add information about your property"]
  },
  extraInfo:{
    type: String,
    default: "Checkin on time, good services."
  },
  propertyType:{
    type: String,
    enum: ["house", "Flat", "guest House", "Hotel"],
    default: "House"
  },
  roomType:{
    type: String,
    enum: ["AnyType", "Room", "Entire House"],
    default: "AnyType"
  },
  maximumGuest:{
    type: Number,
    required: [true, "Please give the maximum no of guest that can occupy"]
  },
  amenities:[
    {
      name:{
        type: String,
        required: true,
        enum: [
          "Wifi",
          "Kitchen",
          "Ac",
          "Washing Machine",
          "Tv",
          "Pool",
          "Free Parking"
        ]
      },
      icon:{
        type: String,
        required: true
      }
    }
  ],
  images:{
    type:[
      {
        public_id:{
          type: String
        },
        url:{
          type: String,
          required: true
        }
      }
    ],
    validate:{
      validator:function (arr) {
        return arr.length >= 6;
      },
      message: "The images must contain at least 6 images"
    }
  },
  price:{
    type: Number,
    required: [true, "Please enter the price per night value"],
    default: 500
  },
  address:{
    area: String,
    city: String,
    state: String,
    pincode: Number
  },
  currentBookings:[

  ],
  userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  slug: String,
  checkInTine:{type:String,default:"11:00"},
  checkOutTine:{type:String,default:"13:00"}
})

propertySchema.pre("save", function(next){
  this.slug = slugify(this.propertyName,{lower:true});
  next();
})

propertySchema.pre("save", function(next){
  this.address.city = this.address.city.toLowerCase().replaceAll(" ","");
  next();
})

const Property = mongoose.model("Property", propertySchema);

export {Property};


