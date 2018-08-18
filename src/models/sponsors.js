import mongoose from 'mongoose';
import { saveOrUpdate } from '../utils/mongodb';

const Sponsor = mongoose.model('sponsor', mongoose.Schema({
  name: String,
  email: String
}));

Sponsor.saveOrUpdate = saveOrUpdate(Sponsor);

export { Sponsor };
