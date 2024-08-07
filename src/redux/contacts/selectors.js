import { selectValueInput } from "../filters/selectors";
import { createSelector } from "@reduxjs/toolkit";

export const selectLoading = (state) => state.contacts.loading;
export const selectError = (state) => state.contacts.error;
export const selectItem = (state) => state.contacts.items;

export const selectVisibleContact = createSelector(
  [selectItem, selectValueInput],
  (contacts, filterContact) => {
    return contacts.filter((contact) => {
      return contact.name.toLowerCase().includes(filterContact.toLowerCase());
    });
  }
);
