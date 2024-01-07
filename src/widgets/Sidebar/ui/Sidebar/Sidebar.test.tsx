import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from 'shared/lib/tests/ComponentRender/ComponentRender';
import { Sidebar } from 'widgets/Sidebar';

describe('Sidebar', () => {
  test('test render', () => {
    ComponentRender(<Sidebar />);
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
  });
  test('test toggle', () => {
    ComponentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    const sidebar = screen.getByTestId('sidebar');
    expect(sidebar).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    expect(sidebar).toHaveClass('collapsed');
  });
});
