import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { _ } from 'utils';
import { BaseComponent } from 'components/base';
import { ButtonCancel, ButtonEdit, ButtonSave, ButtonsPanel } from 'components/ui';
import styles from './styles.scss';

export default function SectionDecorator(ChildComponent) {
  class Section extends Component {
    static propTypes = {
      buttons: PropTypes.array,
      canEdit: PropTypes.bool,
      canSubmit: PropTypes.bool,
      isEditable: PropTypes.bool,
      isEditing: PropTypes.bool,
      title: PropTypes.node.isRequired,
      onCancel: PropTypes.func,
      onEdit: PropTypes.func,
      onSave: PropTypes.func
    };

    static defaultProps = {
      buttons: [],
      canEdit: false,
      canSubmit: true,
      isEditable: false,
      isEditing: false,
      onCancel: _.noop,
      onEdit: _.noop,
      onSave: _.noop
    };

    render() {
      const {
        buttons,
        canEdit,
        canSubmit,
        isEditable,
        isEditing,
        title,
        onCancel,
        onEdit,
        onSave
      } = this.props;

      const childProps = {
        ..._(this.props).omit(_(Section.propTypes).keys()),
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
                <ButtonEdit
                  renderWhen={[
                    canEdit,
                    isEditable,
                    !isEditing
                  ]}
                  key="section-edit"
                  onClick={onEdit} />,

                <ButtonCancel
                  renderWhen={[
                    canEdit,
                    isEditable,
                    isEditing
                  ]}
                  key="section-cancel"
                  onClick={onCancel} />,

                <ButtonSave
                  renderWhen={[
                    canEdit,
                    isEditable,
                    isEditing
                  ]}
                  key="section-save"
                  isDisabled={!canSubmit}
                  onClick={onSave} />,

                ...buttons.filter(Boolean)
              ]}
            </ButtonsPanel>
          </div>

          <ChildComponent {...childProps} />
        </div>
      );
    }
  }

  return BaseComponent(Section);
}
