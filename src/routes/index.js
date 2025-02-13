import Home from '~/pages/Home';
import About from '~/pages/About';
import Project from '~/pages/Project';
import Blogs from '~/pages/Blogs';

const publicRoutes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/projects', component: Project },
  { path: '/blogs', component: Blogs },
];

const privateRoutes = [];

export { privateRoutes, publicRoutes };
