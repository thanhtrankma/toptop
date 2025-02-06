import Home from '~/pages/Home';
import About from '~/pages/About';
import Project from '~/pages/Project';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Project },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
