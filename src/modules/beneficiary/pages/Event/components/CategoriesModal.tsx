import { connect } from 'react-redux';
import ListLink from '../../../../../components/List';
import Modal from '../../../../../components/Modal';
import { Category } from '../redux/types';

interface ComponentProps {
  show: boolean;
  goBack: () => void;
  categories: Category[];
  select: (category: Category) => void;
}

const CategoriesModal = ({
  show = true,
  goBack,
  categories,
  select,
}: ComponentProps) => {
  const selectCategory = (category: Category) => {
    select(category);
  };

  return (
    <Modal show={show} onClose={goBack}>
      <Modal.Header goBack={goBack}>
        <h2>Headlines</h2>
        <p>Choose category</p>
      </Modal.Header>
      <Modal.Main>
        {categories.map((cat) => (
          <ListLink
            text={cat.name}
            key={cat._id}
            onClick={() => selectCategory(cat)}
          />
        ))}
      </Modal.Main>
    </Modal>
  );
};

const mapStateToProps = (state: any) => ({
  categories: state.event.data,
});

export default connect(mapStateToProps)(CategoriesModal);
