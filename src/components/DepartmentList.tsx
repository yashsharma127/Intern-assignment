import { ExpandMore } from '@mui/icons-material';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

const departmentData: {
  department: string;
  sub_departments: string[];
}[] = [
  {
    department: 'customer_service',
    sub_departments: ['support', 'customer_success'],
  },
  {
    department: 'design',
    sub_departments: ['graphic_design', 'product_design', 'web_design'],
  },
];

const DepartmentList = () => {
    
    
  return (
    <div>
      {departmentData.length > 0 &&
        departmentData.map((departmentItem) => (
          <Accordion key={departmentItem.department}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <FormControlLabel
                control={
                  <Checkbox
                    
                    name={departmentItem.department}
                  />
                }
                label={departmentItem.department}
              />
            </AccordionSummary>
            <AccordionDetails>
              <div>
                {departmentItem.sub_departments.map((subDepartment) => (
                  <FormControlLabel
                    key={subDepartment}
                    control={
                      <Checkbox
                        
                        name={subDepartment}
                      />
                    }
                    label={subDepartment}
                    style={{ marginLeft: 16 }}
                  />
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
    </div>
  );
};

export default DepartmentList;
