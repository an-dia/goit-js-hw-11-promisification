import { delay, logger } from './js/task-1';
import { users, toggleUserState, logger as updatedLogger } from './js/task-2';
import { makeTransaction, logSuccess, logError} from './js/task-3'

// Task-1
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms

// ================================================================

// Task-2
toggleUserState(users, 'Mango').then(updatedLogger);
toggleUserState(users, 'Lux').then(updatedLogger);

// ================================================================

// Task-3
makeTransaction({ id: 70, amount: 150 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 71, amount: 230 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 72, amount: 75 })
  .then(logSuccess)
  .catch(logError);

makeTransaction({ id: 73, amount: 100 })
  .then(logSuccess)
  .catch(logError);