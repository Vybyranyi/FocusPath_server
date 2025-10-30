import { Router } from 'express';
import { 
    createHabit, 
    getAllHabits, 
    getHabitById, 
    updateHabit, 
    updateDayTitle, 
    deleteHabit, 
    markHabitCompletion,
    getHabitsForDate,
} from '@controllers/habitController';
import { verifyTokenMiddleware } from '@middlewares/auth';

const router = Router();

// Створення звички
router.post('/', verifyTokenMiddleware, createHabit);

// Отримання звичок на конкретну дату (основний ендпоінт для щоденного відображення)
router.get('/daily', verifyTokenMiddleware, getHabitsForDate);

// Отримання всіх звичок (залишаємо для загального огляду)
router.get('/', verifyTokenMiddleware, getAllHabits);

// Операції з конкретною звичкою
router.get('/:id', verifyTokenMiddleware, getHabitById);
router.put('/:id', verifyTokenMiddleware, updateHabit);
router.delete('/:id', verifyTokenMiddleware, deleteHabit);

// Оновлення дня
router.patch('/:id/day', verifyTokenMiddleware, updateDayTitle);

// Відмітка виконання
router.patch('/:id/complete', verifyTokenMiddleware, markHabitCompletion);

export default router;