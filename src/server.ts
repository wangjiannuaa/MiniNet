import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';
import { MongoClient, ObjectId, WithId, Filter, UpdateFilter } from 'mongodb';

interface User {
  _id?: ObjectId; // optional when inserting
  name: string;
  email: string;
}
 const enum cuisinecommand {
    startup,
    endup,
    tuneup,
    tunedown
  }
interface CuisinePlugin {


  precommand():void;
  timerstart():void;
  timerstop():void;
  command():void;
  postcommand():void;
}
interface ShoppingPlugin {}
interface WordingPlugin{}

//displayed as an variety of iconbutton
interface addon {
  register():void;
  deregister():void;

}
class Measurement {
    constructor(){}
}
class Estimation {
    constructor(){}
}

//reshuffling starting point
class MotherBoard implements CuisinePlugin, ShoppingPlugin, WordingPlugin,addon{

  constructor(){}
  precommand():void{};
  timerstart():void{};
  timerstop():void{};
  command():void{};
  postcommand():void{};
  register():void{};
  deregister():void{};


}








async function demo() {
  const uri = process.env['MONGO_URI'] || 'mongodb://localhost:27017';
  const client = new MongoClient(uri);
  await client.connect();

  const db = client.db('mydb');
  const users = db.collection<User>('users'); // collection typed as User

  // Insert
  const insertResult = await users.insertOne({ name: 'Alice', email: 'alice@example.com' });
  const newId: ObjectId = insertResult.insertedId;

  // Find one (result type is WithId<User> | null)
  const user = await users.findOne({ _id: newId } as Filter<User>) as WithId<User> | null;

  // Find many -> WithId<User>[]
  const all = await users.find({}).toArray();

  // Update (typed UpdateFilter)
  const updateRes = await users.updateOne(
    { _id: newId } as Filter<User>,
    { $set: { email: 'alice@new.com' } } as UpdateFilter<User>,
  );

  await client.close();
}





const browserDistFolder = join(import.meta.dirname, '../browser');

const app = express();
const angularApp = new AngularNodeAppEngine();

/**
 * Example Express Rest API endpoints can be defined here.
 * Uncomment and define endpoints as necessary.
 *
 * Example:
 * ```ts
 * app.get('/api/{*splat}', (req, res) => {
 *   // Handle API request
 * });
 * ```
 */
app.get('/api/repl:syntax', (req, res) => {
    // Handle API request
res.status(200).json({code:"2"});
});




/**
 * Serve static files from /browser
 */
app.use(
  express.static(browserDistFolder, {
    maxAge: '1y',
    index: false,
    redirect: false,
  }),
);

/**
 * Handle all other requests by rendering the Angular application.
 */
app.use((req, res, next) => {
  angularApp
    .handle(req)
    .then((response) =>
      response ? writeResponseToNodeResponse(response, res) : next(),
    )
    .catch(next);
});

/**
 * Start the server if this module is the main entry point, or it is ran via PM2.
 * The server listens on the port defined by the `PORT` environment variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url) || process.env['pm_id']) {
  const port = process.env['PORT'] || 4000;
  app.listen(port, (error) => {
    if (error) {
      throw error;
    }

    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
