import server from './server';
import { PORT } from '@secrets';

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
