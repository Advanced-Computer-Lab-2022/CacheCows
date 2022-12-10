import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const MyReports = ({ report }) => {

  return (
    <div>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://dsu.edu/root-files/report-945x630.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Report #{report.course_id}
        </Typography>
        <Typography variant="body2" color="text.primary">
          {report.report}
        </Typography>
        <Typography className='error' variant="body3" color="text.secondary">
          {report.report_status}
        </Typography>
      </CardContent>
    </Card>
    <br/>
    </div>
  );
}
  
  export default MyReports



