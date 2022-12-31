import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";
import reportbg from '../assets/report.gif';


const MyReports = ({ report }) => {
  const navigate=useNavigate();

  return (
    <div>
    <Card sx={{ maxWidth: 545 }} className='reports' >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src={reportbg}
         // image="https://dsu.edu/root-files/report-945x630.jpg"
          alt="green iguana"
        />
        <CardContent onClick={() => window.location.href=`/ReportFUPage?_id=${report._id}`}>
          <Typography gutterBottom variant="h5" component="div">
          Report #{report.course_id}
          </Typography>
          <Typography variant="body1" color="text.primary">
          {report.report}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {report.report_status}
          </Typography>
        </CardContent>
      </CardActionArea>
      </Card>
     <br/>
    </div>
  );
}
  
  export default MyReports



