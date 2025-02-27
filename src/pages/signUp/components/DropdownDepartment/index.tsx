/* 
© 2025 Aravinth Raj R. All rights reserved.
Unauthorized copying of this file, via any medium, is strictly prohibited.
Proprietary and confidential.  
Written by Aravinth Raj R <aravinthr235@gmail.com>, 2025.
*/
import * as S from "./styles";
import { useTheme } from "../../../../hooks";
import Dropdown from "react-bootstrap/Dropdown";
import { SIGNUP_CONFIG } from "../../config";

export interface IDropDownDepartment {
  selectedDepartment: string | null;
  setSelectedDepartment: (selectedDepartment: string | null) => void;
}

export const DropdownDepartment = ({
  selectedDepartment,
  setSelectedDepartment,
}: IDropDownDepartment) => {
  const departments = SIGNUP_CONFIG.departments;
  const theme = useTheme();

  const handleSelect = (eventKey: string | null) => {
    setSelectedDepartment(eventKey);
  };

  const _selectDepartment = () => {
    return (
      <S.SelectedDepartment $bgColor={theme.colors.textSecondary}>
        {selectedDepartment}
      </S.SelectedDepartment>
    );
  };

  const _dropdown = () => {
    return (
      <S.CustomDropdown onSelect={handleSelect}>
        <S.CustomToggle $bgColor={theme.colors.backGround}>
          <S.DropDownIcon
            $color={theme.colors.primary}
            $bgColor={theme.colors.backGround}
          ></S.DropDownIcon>
        </S.CustomToggle>
        <Dropdown.Menu>
          {departments.map((dept) => (
            <Dropdown.Item key={dept} eventKey={dept}>
              {dept}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </S.CustomDropdown>
    );
  };

  return (
    <S.DepartmentWrapper>
      {_selectDepartment()}
      {_dropdown()}
    </S.DepartmentWrapper>
  );
};
