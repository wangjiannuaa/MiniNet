import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';
import { MongoClient, ObjectId, WithId, Filter, UpdateFilter } from 'mongodb';
//cloud
//1data piper
//2command loader

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

interface selftestonlaunch {
  selftest():string;
}

interface plugin extends selftestonlaunch{
  plugin():void;
  plugout():void;
}
//displayed as an variety of iconbutton
interface addon extends selftestonlaunch{
    register():void;
  deregister():void;

}
interface devicedriver extends selftestonlaunch{
  devicedrivername:string;
  precommand():void;
  timerstart():void;
  timerstop():void;
  command():void;
  postcommand():void;
}


class CuisineDevice implements devicedriver {
   declare devicedrivername:string;
  constructor(name:string){this.devicedrivername=name;}
  selftest():string{return "pass";}
  precommand():void{}
  timerstart():void{}
  timerstop():void{}
  command():void{}
  postcommand():void{}

}
class ShoppingDevice implements devicedriver {
   declare devicedrivername:string;
  constructor(name:string){this.devicedrivername=name;}
  selftest():string{return "pass";}
  precommand():void{}
  timerstart():void{}
  timerstop():void{}
  command():void{}
  postcommand():void{}
}
class WordingDevice implements devicedriver {
 declare devicedrivername:string;
  constructor(name:string){this.devicedrivername=name;}
  selftest():string{return "pass";}
  precommand():void{}
  timerstart():void{}
  timerstop():void{}
  command():void{}
  postcommand():void{}

}



/*
interface Measurement extends tool{

}
interface Estimation extends tool{

}*/



//reshuffling starting point
class MotherBoard implements plugin,addon,devicedriver{
 public brandname:string;
  public typename:string;
  declare devicedrivername:string;

  constructor(brandname:string,typename:string,devicedrivername:string){
    this.brandname=brandname;
    this.typename=typename;
    this.devicedrivername=devicedrivername;
  }
  selftest():string{




    return "brandname:"+this.brandname+"typename:"+this.typename+this.devicedrivername+"devicedrivername"+"pass";}
  plugin():void{}
  plugout():void{}
  register():void{}
  deregister():void{}

  precommand():void{}
  timerstart():void{}
  timerstop():void{}
  command():void{}
  postcommand():void{}

}

const instance=new MotherBoard("prod","com","org");







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

app.get('/api/selftest:syntax', (req, res) => {
    // Handle API request
  res.status(200).json({selftest:instance.selftest()});
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
