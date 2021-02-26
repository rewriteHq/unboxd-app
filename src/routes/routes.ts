import RouteType from './types';
import authRoutes from '../modules/auth/routes/routes';
import beneficiaryRoutes from '../modules/beneficiary/routes/routes';

const combinedRoutes: RouteType[] = [...authRoutes, ...beneficiaryRoutes];

export default combinedRoutes;
