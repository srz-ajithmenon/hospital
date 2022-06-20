import React from 'react';

export const Pagination = (offset, data) => ({total : data.length , items : data.splice(0, offset)})