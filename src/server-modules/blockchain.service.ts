interface BlockHead {
    selectdate():void;
    selectspace():void;
    selectrule():void;
}
interface BlockTail {
    connectbydate():void;//addition operator
    connectbyspace():void;
    connectbyrule():void;
}
interface BlockID{
    id:string;
}
export interface Block {
    _id?: BlockID; // optional when inserting
    date: Date;
    name: string;
    content:any;
}
class BlockModel implements BlockHead,BlockTail,Block{
    constructor(public _id: BlockID,  public date: Date,public name: string,public content: any){
	this._id=_id;
	this.date=date;
	this.name=name;
	this.content=content;
    }
    selectdate():void{}
    selectspace():void{}
    selectrule():void{};
    connectbydate():void{}//in a daterange
    connectbyspace():void{}//with a trackcurve
    connectbyrule():void{};
}
interface BlockchainPath{
    path: RegExp;//story-thread-activity-contribution node
}
export class Activity implements BlockHead,BlockTail,Block//fiber thread
{   constructor(public _id: BlockID,  public date: Date,public name: string,public content: any){
	this._id=_id;
	this.date=date;
	this.name=name;
	this.content=content;
    }
    selectdate():void{}
    selectspace():void{}
    selectrule():void{};
    connectbydate():void{}//in a daterange
    connectbyspace():void{}//with a trackcurve
    connectbyrule():void{};
    
}
export class contribution implements BlockHead,BlockTail,Block
{   constructor(public _id: BlockID,  public date: Date,public name: string,public content: any){
	this._id=_id;
	this.date=date;
	this.name=name;
	this.content=content;
    }
    selectdate():void{}
    selectspace():void{}
    selectrule():void{};
    connectbydate():void{}//in a daterange
    connectbyspace():void{}//with a trackcurve
    connectbyrule():void{};
}
export class thread implements BlockHead,BlockTail,Block
{   constructor(public _id: BlockID,  public date: Date,public name: string,public content: any){
	this._id=_id;
	this.date=date;
	this.name=name;
	this.content=content;
    }
    selectdate():void{}
    selectspace():void{}
    selectrule():void{};
    connectbydate():void{}//in a daterange
    connectbyspace():void{}//with a trackcurve
    connectbyrule():void{};
}
export class story implements BlockHead,BlockTail,Block
{   constructor(public _id: BlockID,  public date: Date,public name: string,public content: any){
	this._id=_id;
	this.date=date;
	this.name=name;
	this.content=content;
    }
    selectdate():void{}
    selectspace():void{}
    selectrule():void{};
    connectbydate():void{}//in a daterange
    connectbyspace():void{}//with a trackcurve
    connectbyrule():void{};
}


export class BlockchainService{
    async getStatus(): Promise<{connected:boolean}>{

	//调用Node兼容的bc SDK
	


	
	return {connected:true};
    }
    add(role: BlockModel,path: BlockchainPath):void{}
    remove(role: BlockModel,path: BlockchainPath):void{}
    endStream():void{}
    startStream():void{}
    
    async checkoutStory(): Promise<any>{
	//时间驱动（对于虚拟社会物体而言）或者规则驱动（对于社会物体object而言），或者规律驱动（对自然物体而言）
	//驱动的本质就是驱动的脚本，也就是“微型小说”。而story看作“一部书”即可。
	//规律意味着事件驱动law
	//规则意味着breakpoint驱动ruler，形成一系列的activity和/或tribe。
	//按照时间进行驱动是工作内容job，不是自我原因。
	return {};
    }
    persistBlockchain():boolean
    {
	return true;
    }
}//template或者sterotype的定义非常有益处，它们就是“短篇小说”
//小机上以管理学内容：要什么趋势/意图看什么位置的次序编排及稍后它们之间的依赖部署（部署也就是写作取决于computer可行性的保证（依赖部署）：虽然有时候是乱序发
//射，但是乱序是一种物理乱序）。
//无论其它，后台编译器/compiler（编辑的平台特化），/前台解释器interpretor（特化为运行器）。
//前者可以加入tracerter，后者可以加入assertor。
//运行平台的考虑就是<robot>的snapshot即style as watch window
//[config法宝]as blackbox ，但是现代游戏中也开放了。
//story是一系列递归路由流程=>{=>}组成，称为控制面板controlling panel，board董事会，或者开发团队。
//情节由<robot>与<robot>之间的交互组成。

