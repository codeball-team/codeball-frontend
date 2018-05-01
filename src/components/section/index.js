import React from 'react';
import PropTypes from 'prop-types';
import _ from 'underscore';
import { noop } from 'utils';
import { CancelButton, EditButton, SaveButton, ButtonsPanel, Render } from 'components';
import styles from './styles.scss';

const CreateSection = (ChildComponent) => {
  const Section = (props) => {
    const {
      buttons,
      canEdit,
      canSubmit = true,
      isEditable,
      isEditing,
      title,
      onCancel = noop,
      onEdit = noop,
      onSave = noop
    } = props;
    const childProps = {
      ..._(props).omit(_(Section.propTypes).keys()),
      isEditing
    };

    return (
      <div className={styles.section}>
        <div className={styles.sectionBar}>
          <div className={styles.sectionTitle}>
            {title}
          </div>

          <ButtonsPanel className={styles.buttonsPanel}>
            <Render when={canEdit && isEditable && !isEditing}>
              <EditButton onClick={onEdit} />
            </Render>

            <Render when={canEdit && isEditable && isEditing}>
              <CancelButton onClick={onCancel} />
              <SaveButton isDisabled={!canSubmit} onClick={onSave} />
            </Render>

            {buttons}
          </ButtonsPanel>
        </div>

        <ChildComponent {...childProps} />
      </div>
    );
  };

  Section.propTypes = {
    buttons: PropTypes.node,
    canEdit: PropTypes.bool,
    canSubmit: PropTypes.bool,
    isEditable: PropTypes.bool,
    isEditing: PropTypes.bool,
    title: PropTypes.node,
    onCancel: PropTypes.func,
    onEdit: PropTypes.func,
    onSave: PropTypes.func
  };

  return Section;
};

export default CreateSection;
