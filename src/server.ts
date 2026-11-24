import {
  AngularNodeAppEngine,
  createNodeRequestHandler,
  isMainModule,
  writeResponseToNodeResponse,
} from '@angular/ssr/node';
import {BlockchainService} from './server-modules/blockchain.service';
import express from 'express';
import { join } from 'node:path';
import { MongoClient, ObjectId, WithId, Filter, UpdateFilter } from 'mongodb';
import { EABI } from './app/eabi.message';
//cloud
//1data piper
//2command loader
const app = express();
const angularApp = new AngularNodeAppEngine();
const blockchainservice= new BlockchainService();

const browserDistFolder = join(import.meta.dirname, '../browser');//both for managerment and react

 const enum artingcommand {
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


class MixedRealityDevice implements devicedriver {
   declare public devicedrivername:string;
  constructor(name:string){this.devicedrivername=name;}
  selftest():string{return "pass";}
  precommand():void{}
  timerstart():void{}
  timerstop():void{}
  command():void{}
  postcommand():void{}

}
class ShoppingDevice implements devicedriver {
   declare public devicedrivername:string;
  constructor(name:string){this.devicedrivername=name;}
  selftest():string{return "pass";}
  precommand():void{}
  timerstart():void{}
  timerstop():void{}
  command():void{}
  postcommand():void{}
}
class WordingDevice implements devicedriver {
 declare public devicedrivername:string;
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
  declare public devicedrivername:string;

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

    precommand():void{



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

    app.get('/api/selftest:syntax', (req, res) => {
    // Handle API request
      res.status(200).json({selftest:[{position:1,name:"motherboard",status:instance.selftest()}]});
    });
    app.get('/api/manager:messagehistory', (req, res) => {
    // Handle API request
	res.status(200).json({messagehistory:[{position:1,name:"w",phase:"genom",status:"dev"},
					      {position:2,name:"e",phase:"cart",status:"2020"}]});
    });
      
app.get('/api/repl:syntax', (req, res) => {
    // Handle API request
res.status(200).json({code:"2"});
});

	app.get('/api/blockchain:status', async(req, res,next) => {
	    // Handle API request

	    try{
		res.status(200).json(await blockchainservice.getStatus());
	    } catch(error){next(error) }

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

  }
  timerstart():void{}
  timerstop():void{}
  command():void{}
  postcommand():void{}

}




interface TableHead {
    selectrow():void;
    selectcol():void;
}
interface TableTail {
    connectbyrow():void;//addition operator
    connectbycol():void;
}


type UserId = ObjectId;

export interface User {
  _id?: UserId; // optional when inserting
  name: string;
  email: string;
}
class UserRecords implements TableHead,TableTail,User{
    constructor(public _id: UserId, public name: string, public email: string){
	this._id=_id;
	this.name=name;
	this.email=email;
    }
    selectrow():void{}
    selectcol():void{}
    connectbyrow():void{}//addition operator
    connectbycol():void{}
}
type IssueId =ObjectId;
interface Issue {
  _id?: IssueId; 
  name: string;
  issuetext: string;
}//view1:
//view2:operator
//view3:manager viewpoint,css组件(dom容器(js用户代码code))


class IssueRecords implements TableHead,TableTail, Issue{
     issuefragment:any;
     constructor(public _id: IssueId, public name: string, public issuetext: string){
	this._id=_id;
	this.name=name;
	 this.issuetext=issuetext;
	 this.issuefragment={};
     }

    
   selectrow():void{}
   selectcol():void{}
   connectbyrow():void{}//addition operator
   connectbycol():void{}

}
interface Code{
    _dateandtime?: Date;
    _name?: string;
    codelevel:any;
    codebody:any;

}

class CodeRecords implements TableHead,TableTail,Code
{
    constructor(public _dateandtime: Date, public _name: string, public codelevel: string,public codebody:string){
	    this._dateandtime=_dateandtime;
    this._name=_name;
    this.codelevel=codelevel;
	this.codebody=codebody;
	
    }
    selectrow():void{}
    selectcol():void{}
    connectbyrow():void{}//addition operator
    connectbycol():void{}
    
}

interface Message {
    _dateandtime?: Date;
    _name?: EABI;
    messagelevel:any;
    messagebody:any;

    _from: UserId;
    _to: UserId;
    about: any;
}

class MessageRecords implements TableHead,TableTail,Message
{

    constructor(public _dateandtime: Date, public _name: EABI, public messagelevel: string,public messagebody:string,
		public    _from: UserId,
	public	_to: UserId,
   public about: any
	       ){
	    this._dateandtime=_dateandtime;
    this._name=_name;
    this.messagelevel=messagelevel;
	this.messagebody=messagebody;
	this._from=_from;
	this._to=_to;
	this.about=about;
    }
    selectrow():void{}
    selectcol():void{}
    connectbyrow():void{}//addition operator
    connectbycol():void{}
}//很明显，消息来自于三角关系：USER，Issue，Code
//message称为包括了smartcontract，order，cart等各种与客户设备交互的复杂信息。


async function mdbstartup() {
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

const instance=new MotherBoard("prod","com","org");
instance.precommand();




/**
 * Request handler used by the Angular CLI (for dev-server and during build) or Firebase Cloud Functions.
 */
export const reqHandler = createNodeRequestHandler(app);
