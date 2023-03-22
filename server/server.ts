const WebSocket = require("ws").Server;

export class Server {
  public clients: any = [];
  public wss: any = null;
  public server: any = null;

  public start(port: number) {
    this.wss = new WebSocket({ port: port });
    console.log(`WebSocket initialized port number : ${port}`);

    this.wss.on("connection", (ws: any) => {
      this.clients.push(ws);
      console.log(`Connected Clients count : ${this.clients.length}`);

      ws.on("message", (message: string) => {
        console.log(`Received message: ${message}`);
        ws.send("Good, Nice to meet you! I am Server!");
      });
    });

    this.wss.on("close", (error: any) => {
      console.log(`WebSocket closed : ${error}`);
    });

    this.wss.on("error", (error: any) => {
      console.log(`error occurs! : ${error}`);
    });
  }
}
