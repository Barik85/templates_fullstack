import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { requestTemplate } from '../../api/api';

const TemplatePage = (props) => {
  const { match, token } = props;
  const id = match && match.params.id;

  const [template, setTemplate] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    requestTemplate({ id, token })
      .then((res) => {
        if (res && res.data) {
          setTemplate(res.data);
        }
      })
      .catch((err) => {
        setError(err);
      })
  }, [id])

  if (error) {
    return <div>{error}</div>
  } else if (!template) {
    return <div>Loading...</div>
  }

  const {
    title,
    owner,
    price,
    description,
    createdAt,
    download_amount: downloadCounter,
    image,
  } = template;

  return (
    <div>
      <h1 className="h1">{title}</h1>
      <div className="container-fluid">
        <div className="row justify-content-between">
          <div>
            author: {owner && owner.email}
          </div>
          <div>
            price: {price}$
          </div>
          <div>
            created: {createdAt ? moment(createdAt).format('DD.MM.YYYY') : '...'}
          </div>
        </div>
      </div>
      {image ? (
        <img src={image} className="img-fluid" />
      ) : null}

      <div>
        {description}
      </div>
    </div>
  );
};

TemplatePage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default TemplatePage;
