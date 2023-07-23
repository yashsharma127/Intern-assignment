import React, { useState } from 'react';
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
    
    const [selectDepart, setselectDepart] = useState<{ [key: string]: boolean }>({});
    const [selectSubdepart, setselectSubdepart] = useState<{ [key: string]: boolean }>({});
  
    const handleDepartmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const department = event.target.name;
    const newselectDepart = { ...selectDepart };
    const newselectSubdepart = { ...selectSubdepart };

    if (event.target.checked) {
      newselectDepart[department] = true;
      departmentData
        .find((dep) => dep.department === department)!
        .sub_departments.forEach((subDep) => {
          newselectSubdepart[subDep] = true;
        });
    } else {
      delete newselectDepart[department];
      departmentData
        .find((dep) => dep.department === department)!
        .sub_departments.forEach((subDep) => {
          delete newselectSubdepart[subDep];
        });
    }

    setselectDepart(newselectDepart);
    setselectSubdepart(newselectSubdepart);
  };
  const handleSubDepartmentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const subDepartment = event.target.name;
    const department = departmentData.find((dep) =>
      dep.sub_departments.includes(subDepartment)
    )?.department;

    if (department) {
      const newselectSubdepart = { ...selectSubdepart };
      const newselectDepart = { ...selectDepart };

      if (event.target.checked) {
        newselectSubdepart[subDepartment] = true;
        const allSubDepartmentsSelected = departmentData
          .find((dep) => dep.department === department)!
          .sub_departments.every((subDep) => newselectSubdepart[subDep]);
        if (allSubDepartmentsSelected) {
          newselectDepart[department] = true;
        }
      } else {
        delete newselectSubdepart[subDepartment];
        delete newselectDepart[department];
      }

      setselectSubdepart(newselectSubdepart);
      setselectDepart(newselectDepart);
    }
  };

  return (
    <div>
      {departmentData.length > 0 &&
        departmentData.map((departmentItem) => (
          <Accordion key={departmentItem.department}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={selectDepart[departmentItem.department] || false}
                    onChange={handleDepartmentChange}
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
                        checked={selectSubdepart[subDepartment] || false}
                        onChange={handleSubDepartmentChange}
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
