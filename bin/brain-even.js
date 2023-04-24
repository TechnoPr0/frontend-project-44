#!/usr/bin/env node

import { game } from '../src/index.js';
import { evenLogic, question } from '../src/games/even.js';

game(evenLogic, question);
