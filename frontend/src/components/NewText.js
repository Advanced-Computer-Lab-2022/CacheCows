import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

 const Comments = ({comment}) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '40%', flexShrink: 0 }}>
            Report Comment
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>{comment.createdAt}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {comment.report_comment}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default Comments;