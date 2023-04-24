#!/usr/bin/env node

import { game } from '../src/index.js';
import { progressionLogic, question } from '../src/games/progression.js';

game(progressionLogic, question);
