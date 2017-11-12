import App from './App';
import Home from './views/Home';
import About from './views/About';

export const routes = [
  { component: App,
    routes: [
      { 
        path: '/',
        exact: true,
        component: Home
      },
      { 
        path: '/about',
        component: About
      }
    ]
  }
]