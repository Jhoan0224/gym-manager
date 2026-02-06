import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import { fileURLToPath } from 'url';
import cors from 'cors';

// API Routes 
import { authApp } from './src/routes/auth.route.js';
import { adminUsersApp } from './src/routes/admin/admin-users.route.js';
import { adminSearchApp } from './src/routes/admin/admin-search.route.js';
import { userAccountApp } from './src/routes/user/user.route.js';
import { publicApp } from './src/routes/public.route.js';
import { superAdminApp } from './src/routes/super_admin/super-admin.route.js';

var app = express();

app.use(cors(
//     {
//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
//   allowedHeaders: ['Content-Type', 'Authorization']
//   }
));
app.options('*', cors());


// view engine setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());  
app.use(express.static(path.join(__dirname, 'public')));

app.use('/gym-365-public/api', publicApp);
app.use('/gym-365/auth', authApp);
app.use('/gym-365/user', userAccountApp);
app.use('/gym-365-admin/admin', adminUsersApp);
app.use('/gym-365-admin/admin', adminSearchApp);
app.use('/gym-365-admin/sp-admin', superAdminApp);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
//   res.render('error');
});

export default app;