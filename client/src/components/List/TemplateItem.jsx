import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';

const TemplateItem = ({ template }) => {
  const { _id, title, owner, createdAt, image } = template;

  const email = owner && owner.email;

  return (
    <Link to={`/templates/${_id}`} className="card card-body mb-3">
      {image && (
        <img className="card-img-top" src={image} alt={title} />
      )}
      <h5 className="h3">
        {title}
      </h5>
      <div className="card-text">
        author: {email}
      </div>
      <small className="text-muted">
        Created: {createdAt ? moment(createdAt).format('MM.DD.YYYY') : 'along time ago'}
      </small>
    </Link>
  );
};

TemplateItem.propTypes = {
  template: PropTypes.shape({
    _id: PropTypes.string,
    title: PropTypes.string,
    owner: PropTypes.object,
    createdAt: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};

export default TemplateItem;
