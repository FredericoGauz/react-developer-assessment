import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { colors } from '../../styles/colors';
import { ICategory } from '../../types/category.interface';

const animatedComponents = makeAnimated();
export interface IPostFiltersProps {
  setFilters: (filters: ICategory[]) => void;
  filters: ICategory[];
}
export const PostFilters = (props: IPostFiltersProps) => {
  /* 
    *   Extracted from mock/data.json
    - Since each post category has a different id, I am using the category 'name' as a filter instead 

    *   They are hardcoded but ideally they will come from the API as well
  */
  const categories = [
    { value: 'surveys-and-forms', label: 'Surveys and Forms' },
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'platform-news-and-updates', label: 'Platform News and Updates' },
    { value: 'tips-and-best-practise', label: 'Tips and Best Practise' },
    { value: 'data-management', label: 'Data Management' },
    { value: 'marketing-analytics', label: 'Marketing Analytics' },
    { value: 'landing-pages', label: 'Landing Pages' },
    { value: 'ecommerce', label: 'Ecommerce' },
    { value: 'email-marketing', label: 'Email Marketing' },
    { value: 'marketing-automation', label: 'Marketing Automation' },
  ];

  //TODO [remove any type]
  function changeFilters(options: any) {
    const filters =
      options !== null ? (Array.isArray(options) ? options : [options]) : [];
    return props.setFilters(filters.map(f => ({ id: f.value, name: f.label})));
  }
  return (
    <div>
      <Select
        options={categories}
        isMulti
        components={animatedComponents}
        styles={{
          control: () => ({
            display: 'flex',
            width: '80vw',
            border: '2px solid' + colors.darkGray,
          }),
          multiValueLabel: (styles) => ({
            ...styles,
            backgroundColor: '#6b4040',
            color: 'white',
          }),
        }}
        className="basic-multi-select"
        classNamePrefix="select"
        name="categories"
        placeholder="Choose One or More Categories"
        onChange={(options) => {
          changeFilters(options);
        }}
      />
    </div>
  );
};
