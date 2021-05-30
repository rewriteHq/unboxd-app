import RouteType from './types';
import authRoutes from '../modules/auth/routes/routes';
import contributorRoutes from '../modules/contributor/routes';
import beneficiaryRoutes from '../modules/beneficiary/routes/routes';
import marketingRoutes from '../modules/marketing/routes';

const combinedRoutes: RouteType[] = [
  ...authRoutes,
  ...beneficiaryRoutes,
  ...contributorRoutes,
  ...marketingRoutes,
];

export default combinedRoutes;
