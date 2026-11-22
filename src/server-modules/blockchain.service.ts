interface BlockHead {
    selectdate():void;
    selectspace():void;
}
interface BlockTail {
    connectbydate():void;//addition operator
    connectbyspace():void;
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
    connectbydate():void{}//in a daterange
    connectbyspace():void{}//with a trackcurve
}


export class BlockchainService{
    async getStatus(): Promise<{connected:boolean}>{

	//调用Node兼容的bc SDK
	


	
	return {connected:true};
    }

    async checkoutStory():Promise<any>{
	//时间驱动（对于虚拟社会物体而言）或者规则驱动（对于社会物体object而言），或者规律驱动（对自然物体而言）
	//驱动的本质就是驱动的脚本，也就是“微型小说”。而story看作“一部书”即可。
	//规律意味着事件驱动
	//规则意味着breakpoint驱动
	return {};
    }
    persistBlockchain():boolean
    {
	return true;
    }
}//template或者sterotype的定义非常有益处，它们就是“短篇小说”
//小机上以管理学内容：要什么趋势/意图看什么位置的次序编排及稍后它们之间的依赖部署（部署也就是写作取决于computer可行性的保证（依赖部署）：虽然有时候是乱序发
//射，但是乱序是一种物理乱序）。
