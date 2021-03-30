import RouteType from './types';
import authRoutes from '../modules/auth/routes/routes';
import contributorRoutes from '../modules/contributor/routes';
import beneficiaryRoutes from '../modules/beneficiary/routes/routes';

const combinedRoutes: RouteType[] = [
  ...authRoutes,
  ...contributorRoutes,
  ...beneficiaryRoutes,
];

export default combinedRoutes;
