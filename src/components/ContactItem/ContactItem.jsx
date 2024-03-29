import PropTypes from 'prop-types';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Button,
  Heading,
  Flex,
} from '@chakra-ui/react';
import { ContactsItem } from './ContactItem.styled';

function ContactItem({ id, name, number, onDeleteBtn }) {
  return (
    <ContactsItem>
      <Card height="250px" padding="20px" colorScheme="" width="300px">
        <Flex direction="column" alignItems="center">
          <CardHeader>
            <Heading height="auto" fontSize="26px" size="md">
              Name: {name}
            </Heading>
          </CardHeader>
          <CardBody>
            <Text height="auto" fontSize="20px" fontWeight="500">
              Number: {number}
            </Text>
          </CardBody>
          <CardFooter>
            <Button
              colorScheme="linear-gradient(to right, rgb(0, 180, 219), rgb(0, 131, 176));"
              fontSize="20px"
              width="200px"
              id={id}
              onClick={() => {
                onDeleteBtn(id);
              }}
            >
              Delete
            </Button>
          </CardFooter>
        </Flex>
      </Card>
    </ContactsItem>
  );
}

export { ContactItem };

ContactItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }).isRequired
  ),

  onDeleteBtn: PropTypes.func.isRequired,
};
