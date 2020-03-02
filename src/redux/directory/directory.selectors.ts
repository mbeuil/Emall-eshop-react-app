/** @format */

import { createSelector } from 'reselect';

import * as T from '../../Types';

const selectDirectory = (state: T.StateProps) => state.directory;

export const selecDirectorySections = createSelector(
  [selectDirectory],
  (directory) => directory.sections,
);
