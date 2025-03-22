'use server';

import { B5Error } from '@/types';
import { connectToDatabase } from '@/db';
import { Collection } from 'mongodb';

const COLLECTION_NAME = 'articles_views';

async function checkAndCreateArticleViewsDocument(
  collection: Collection,
  articleId: string
): Promise<void> {
  const document = await collection.findOne({ articleId });

  if (!document) {
    await collection.insertOne({
      articleId,
      count: 0
    });
  }
}

export async function incrementArticleViews(
  articleId: string
): Promise<number> {
  try {
    const db = await connectToDatabase();
    const collection = db.collection(COLLECTION_NAME);

    await checkAndCreateArticleViewsDocument(collection, articleId);
    await collection.updateOne({ articleId }, { $inc: { count: 1 } });

    const document = await collection.findOne({ articleId });

    return document?.count || 0;
  } catch (error) {
    console.error(error);
    throw new B5Error({
      name: 'SavingError',
      message: 'Failed to increment article views count!'
    });
  }
}
