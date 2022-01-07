import { Schema } from "mongoose";

function addModifyTimes(schema: Schema) {

  schema.add({
    createdAt: Date,
    updatedAt: Date,
  });

  schema.pre('save', function (next) {
    const now = Date.now();

    this.updatedAt = now;

    if (!this.createdAt)
      this.createdAt = now;

    next();
  });

}

export default addModifyTimes;