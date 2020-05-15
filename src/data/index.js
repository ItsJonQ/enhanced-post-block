import faker from 'faker';
import { Schema } from 'faker-schema';

const postSchema = new Schema(() => ({
	id: faker.random.uuid(),
	title: faker.lorem.sentence(),
	excerpt: faker.lorem.sentences(2),
	image: 'http://via.placeholder.com/640x360',
	url: '#',
}));

export const posts = postSchema.make(10);
