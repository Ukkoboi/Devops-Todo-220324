import { render, screen } from '@testing-library/react';
import { TodoList } from './TodoList';

it('renders No task found when list is empty', () => {
 render(<TodoList />);
 const linkElement = screen.getByText(/No tasks found/);
 expect(linkElement).toBeInTheDocument();
});
