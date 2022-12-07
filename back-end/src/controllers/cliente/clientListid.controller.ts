import { Request, Response } from "express";
import clientListIdService from "../../services/cliente/clientListid.service";

async function clientListIdController(request: Request, response: Response) {
  const clientId: string = request.clientId;

  const client = await clientListIdService(clientId);

  return response.json({ statusCode: 200, message: "Success", client: client });
}

export default clientListIdController;
