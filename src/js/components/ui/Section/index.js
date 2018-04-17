import React from 'react';
import PropTypes from 'prop-types';
import { _ } from 'utils';
import { ButtonCancel, ButtonEdit, ButtonSave, ButtonsPanel, Render } from 'components/ui';
import styles from './styles.scss';

const SectionDecorator = (ChildComponent) => {
  const Section = (props) => {
    const {
      buttons = [],
      canEdit,
      canSubmit = true,
      isEditable,
      isEditing,
      title,
      onCancel = _.noop,
      onEdit = _.noop,
      onSave = _.noop
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
            {[
              <Render
                key="section-edit"
                when={[
                  canEdit,
                  isEditable,
                  !isEditing
                ]}>
                <ButtonEdit onClick={onEdit} />
              </Render>,

              <Render
                key="section-cancel"
                when={[
                  canEdit,
                  isEditable,
                  isEditing
                ]}>
                <ButtonCancel onClick={onCancel} />
              </Render>,

              <Render
                key="section-save"
                when={[
                  canEdit,
                  isEditable,
                  isEditing
                ]}>
                <ButtonSave isDisabled={!canSubmit} onClick={onSave} />
              </Render>,

              ...buttons.filter(Boolean)
            ]}
          </ButtonsPanel>
        </div>

        <ChildComponent {...childProps} />
      </div>
    );
  };

  Section.propTypes = {
    buttons: PropTypes.array,
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

export default SectionDecorator;