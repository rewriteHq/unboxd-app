import RouteType from './types';
import authRoutes from '../modules/auth/routes/routes';

const combinedRoutes: RouteType[] = [...authRoutes];

export default combinedRoutes;
