import React, { useState, useEffect } from 'react';
import { requestTemplatesList } from '../../api/api';

import TemplateItem from './TemplateItem';

const List = () => {
  const [list, getList] = useState([]);

  useEffect(() => {
    requestTemplatesList()
      .then((res) => {
        if (res && res.status === 200 && res.data) {
          getList(res.data);
        }
      })
  }, [])

  return list.length > 0 ? (
    <ul className="row">
      {list.map(template => (
        <li key={template._id} className="col-sm-12 col-md-6">
          <TemplateItem template={template} />
        </li>
      ))}
    </ul>
  ) : (
    <div>No templates found.</div>
  );
};

export default List;
