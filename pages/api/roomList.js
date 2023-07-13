import { roomList } from "../../mocks/reservations";

export default function handler(req, res) {
  res.status(200).json(roomList);
}
