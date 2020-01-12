export class dataPostClass{
public sentBy: any="";
public sentFrom: any="";
public sentAt: any="";
public deliverTo: any="";
public message: any="";

setSentBy(sentby){
    this.sentBy=sentby;
}
GetsentBy(){
    return this.sentBy;
}
setSentFrom(sentfrom){
    this.sentFrom=sentfrom;
    console.log(this.sentFrom);
}
GetsentFrom(){

    return this.sentFrom;
}

setSentAt(sentat){
    this.sentAt=sentat;
}
GetSentAt(){
    return this.sentAt;
}

setMessage(message){
    this.message=message;
}
GetMessage(){
    return this.message;
}

setDeliverTo(deliverto){
    this.deliverTo=deliverto;
}
GetDeliverTo(){
    return this.deliverTo;
}

}